"use strict";
// LTI 1.3 Provider - JWT Validation and Session Management
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLTIToken = verifyLTIToken;
exports.extractLaunchContext = extractLaunchContext;
exports.mapMoodleRoleToOpenMAIC = mapMoodleRoleToOpenMAIC;
exports.createLTISession = createLTISession;
exports.verifyLTISession = verifyLTISession;
exports.generateState = generateState;
exports.generateNonce = generateNonce;
exports.storeState = storeState;
exports.getAndDeleteState = getAndDeleteState;
var jose_1 = require("jose");
var config_1 = require("./config");
// Cache for platform JWKS
var jwksCache = new Map();
/**
 * Fetch the platform's JWKS (JSON Web Key Set)
 */
function getPlatformJWKS() {
    return __awaiter(this, void 0, void 0, function () {
        var config, cacheKey, cached, response, jwks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = (0, config_1.getLTIPlatformConfig)();
                    cacheKey = config.issuer;
                    cached = jwksCache.get(cacheKey);
                    if (cached && cached.expires > Date.now()) {
                        return [2 /*return*/, cached.keys];
                    }
                    return [4 /*yield*/, fetch(config.jwksEndpoint)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch JWKS from ".concat(config.jwksEndpoint, ": ").concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    jwks = _a.sent();
                    // Cache for 1 hour
                    jwksCache.set(cacheKey, {
                        keys: jwks.keys,
                        expires: Date.now() + 60 * 60 * 1000,
                    });
                    return [2 /*return*/, jwks.keys];
            }
        });
    });
}
/**
 * Find the correct key for JWT verification
 */
function getSigningKey(kid) {
    return __awaiter(this, void 0, void 0, function () {
        var keys, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getPlatformJWKS()];
                case 1:
                    keys = _a.sent();
                    key = keys.find(function (k) { return k.kid === kid; });
                    if (!key) {
                        throw new Error("No matching key found for kid: ".concat(kid));
                    }
                    return [2 /*return*/, key];
            }
        });
    });
}
/**
 * Verify and decode an LTI 1.3 id_token
 */
function verifyLTIToken(idToken) {
    return __awaiter(this, void 0, void 0, function () {
        var config, headerB64, header, jwk, key, payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = (0, config_1.getLTIPlatformConfig)();
                    headerB64 = idToken.split('.')[0];
                    header = JSON.parse(Buffer.from(headerB64, 'base64').toString());
                    return [4 /*yield*/, getSigningKey(header.kid)];
                case 1:
                    jwk = _a.sent();
                    return [4 /*yield*/, (0, jose_1.importJWK)(jwk, header.alg)];
                case 2:
                    key = _a.sent();
                    return [4 /*yield*/, (0, jose_1.jwtVerify)(idToken, key, {
                            issuer: config.issuer,
                            audience: config.clientId,
                        })];
                case 3:
                    payload = (_a.sent()).payload;
                    return [2 /*return*/, payload];
            }
        });
    });
}
/**
 * Extract launch context from LTI JWT payload
 */
function extractLaunchContext(payload) {
    var _a, _b, _c;
    var context = payload['https://purl.imsglobal.org/spec/lti/claim/context'];
    return {
        // User information
        userId: payload.sub || '',
        email: payload.email,
        name: payload.name,
        givenName: payload.given_name,
        familyName: payload.family_name,
        // Role information
        roles: Array.isArray(payload['https://purl.imsglobal.org/spec/lti/claim/roles'])
            ? payload['https://purl.imsglobal.org/spec/lti/claim/roles']
            : [],
        roleScopeMentor: payload['https://purl.imsglobal.org/spec/lti/claim/role_scope_mentor'],
        // Context (course) information
        contextId: (context === null || context === void 0 ? void 0 : context.id) || '',
        contextLabel: context === null || context === void 0 ? void 0 : context.label,
        contextTitle: context === null || context === void 0 ? void 0 : context.title,
        contextType: Array.isArray(context === null || context === void 0 ? void 0 : context.type) ? context.type[0] : context === null || context === void 0 ? void 0 : context.type,
        // Platform information
        platformId: payload.iss || '',
        deploymentId: payload['https://purl.imsglobal.org/spec/lti/claim/deployment_id'] || '',
        // LTI-specific
        messageType: payload['https://purl.imsglobal.org/spec/lti/claim/message_type'] || '',
        version: payload['https://purl.imsglobal.org/spec/lti/claim/version'] || '',
        resourceLinkId: (_a = payload['https://purl.imsglobal.org/spec/lti/claim/resource_link']) === null || _a === void 0 ? void 0 : _a.id,
        resourceLinkTitle: (_b = payload['https://purl.imsglobal.org/spec/lti/claim/resource_link']) === null || _b === void 0 ? void 0 : _b.title,
        resourceLinkDescription: (_c = payload['https://purl.imsglobal.org/spec/lti/claim/resource_link']) === null || _c === void 0 ? void 0 : _c.description,
        // Custom parameters
        custom: payload['https://purl.imsglobal.org/spec/lti/claim/custom'],
    };
}
/**
 * Map Moodle roles to OpenMAIC roles
 */
function mapMoodleRoleToOpenMAIC(roles) {
    // Moodle role URIs
    var ROLE_MAPPINGS = {
        'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator': 'admin',
        'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor': 'teacher',
        'http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor': 'teacher',
        'http://purl.imsglobal.org/vocab/lis/v2/membership#Learner': 'student',
        'http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator': 'admin',
        'http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper': 'teacher',
        'http://purl.imsglobal.org/vocab/lis/v2/membership#Manager': 'admin',
        'http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor': 'teacher',
        'http://purl.imsglobal.org/vocab/lis/v2/membership#TeachingAssistant': 'teacher',
        'http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#Grader': 'teacher',
        'http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#PrimaryInstructor': 'teacher',
        'http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#SecondaryInstructor': 'teacher',
    };
    // Check each role
    for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
        var role = roles_1[_i];
        var mapped = ROLE_MAPPINGS[role];
        if (mapped) {
            // Return admin if found, otherwise continue checking
            if (mapped === 'admin')
                return 'admin';
            if (mapped === 'teacher')
                continue; // Keep checking for admin
            return mapped;
        }
    }
    // Default to student
    return 'student';
}
/**
 * Create a session JWT for the LTI user
 */
function createLTISession(context) {
    return __awaiter(this, void 0, void 0, function () {
        var secret, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    secret = new TextEncoder().encode((0, config_1.getSessionSecret)());
                    return [4 /*yield*/, new jose_1.SignJWT({
                            userId: context.userId,
                            email: context.email,
                            name: context.name,
                            role: mapMoodleRoleToOpenMAIC(context.roles),
                            contextId: context.contextId,
                            contextTitle: context.contextTitle,
                            platformId: context.platformId,
                            deploymentId: context.deploymentId,
                            resourceLinkId: context.resourceLinkId,
                        })
                            .setProtectedHeader({ alg: 'HS256' })
                            .setIssuedAt()
                            .setIssuer('openmaic-lti')
                            .setAudience('openmaic')
                            .setExpirationTime('1h')
                            .sign(secret)];
                case 1:
                    token = _a.sent();
                    return [2 /*return*/, token];
            }
        });
    });
}
/**
 * Verify an LTI session token
 */
function verifyLTISession(token) {
    return __awaiter(this, void 0, void 0, function () {
        var secret, payload, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    secret = new TextEncoder().encode((0, config_1.getSessionSecret)());
                    return [4 /*yield*/, (0, jose_1.jwtVerify)(token, secret, {
                            issuer: 'openmaic-lti',
                            audience: 'openmaic',
                        })];
                case 1:
                    payload = (_a.sent()).payload;
                    return [2 /*return*/, payload];
                case 2:
                    error_1 = _a.sent();
                    console.error('Failed to verify LTI session:', error_1);
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Generate state parameter for OIDC flow
 */
function generateState() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var state = '';
    for (var i = 0; i < 32; i++) {
        state += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return state;
}
/**
 * Generate nonce for OIDC flow
 */
function generateNonce() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var nonce = '';
    for (var i = 0; i < 32; i++) {
        nonce += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return nonce;
}
/**
 * Store state temporarily (in production, use Redis)
 * For now, we'll use an in-memory store
 */
var stateStore = new Map();
function storeState(state, nonce) {
    stateStore.set(state, {
        nonce: nonce,
        expires: Date.now() + config_1.LTI_CONFIG.state.maxAge,
    });
    // Clean up expired states
    for (var _i = 0, _a = stateStore.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (value.expires < Date.now()) {
            stateStore.delete(key);
        }
    }
}
function getAndDeleteState(state) {
    var stored = stateStore.get(state);
    if (!stored) {
        return null;
    }
    stateStore.delete(state);
    if (stored.expires < Date.now()) {
        return null;
    }
    return { nonce: stored.nonce };
}
