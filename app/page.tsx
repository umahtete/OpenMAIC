'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold mb-4 text-[#1e3a5f]">
          LuxUp AI Tutor
        </h1>
        <p className="text-2xl text-gray-600 mb-6">
          Lighting the Path to Knowledge
        </p>
        <p className="text-lg text-gray-500 mb-8">
          AI-powered personalized education platform by LuxUp Training
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-600">Intelligent tutoring that adapts to you</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Always Available</h3>
            <p className="text-gray-600">24/7 access to learning</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
            <p className="text-gray-600">Adaptive lessons that meet you where you are</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Real-time insights into your development</p>
          </div>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a href="/get-started" className="px-6 py-3 bg-[#1e3a5f] text-white rounded-lg font-semibold hover:bg-[#2d4a6f]">
            Get Started
          </a>
          <a href="/learn-more" className="px-6 py-3 border-2 border-[#1e3a5f] text-[#1e3a5f] rounded-lg font-semibold hover:bg-gray-50">
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}
