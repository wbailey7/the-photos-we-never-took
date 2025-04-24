'use client';

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 max-w-3xl mx-auto">
      <Link href="/" className="text-blue-400 text-sm hover:underline mb-8 inline-block">
        ← Back to homepage
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-center">
        About This Project
      </h1>

      <p className="text-gray-300 mb-4 text-lg">
        My younger brother passed away in 2018 at the age of 17. He never got to graduate, meet my son, or live out the life he should’ve had. This project — <strong>The Photos We Never Took</strong> — is my tribute to him.
      </p>

      <p className="text-gray-400 mb-4">
        Using AI, I’ve trained a model on real family photos to generate portraits of imagined moments. These aren’t just digital experiments — they’re emotional memories that never happened. Moments like him holding my son. Graduating high school. Laughing by the lake.
      </p>

      <p className="text-gray-400 mb-6">
        I built every part of this project — scanning family albums, fine-tuning the model, designing the website, and writing the code — as both a personal journey and a professional showcase.
      </p>

      <h2 className="text-xl font-semibold text-white mt-10 mb-4 text-center">
        Contact
      </h2>
      <div className="text-center text-sm text-gray-300">
        📧 <a href="mailto:wes.bailey10@gmail.com" className="text-blue-400 hover:underline">your@email.com</a><br />
        🔗 <a href="https://www.linkedin.com/in/wes-bailey-93a8ab35b" className="text-blue-400 hover:underline" target="_blank">LinkedIn Profile</a>
      </div>
    </div>
  );
}
