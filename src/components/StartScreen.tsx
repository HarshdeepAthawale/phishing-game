import React from 'react';

interface StartScreenProps {
  onStartGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🎯 Phishing Game
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Test your ability to spot phishing websites!
            </p>
          </div>

          <div className="text-left mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How to Play
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                <p>You'll see 10 website screenshots - some real, some fake</p>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                <p>Click "Real" or "Phishing" for each website</p>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                <p>Get instant feedback and explanations</p>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                <p>Earn points and see your final score!</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              Scoring System
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <span className="text-green-600 font-bold mr-2">+10</span>
                <span>Correct answer</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 font-bold mr-2">+5</span>
                <span>Fast answer bonus</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-bold mr-2">-3</span>
                <span>Wrong answer</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 font-bold mr-2">Tips</span>
                <span>Look for suspicious domains, urgent messages, and poor design</span>
              </div>
            </div>
          </div>

          <button
            onClick={onStartGame}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Start Game
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Educational game to improve your online safety awareness
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
