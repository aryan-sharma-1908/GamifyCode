import React, { useState } from 'react';
import { Play, Upload, RotateCcw, CheckCircle, XCircle, Clock, Users, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function LeetCodeClone() {
  const [code, setCode] = useState(`function twoSum(nums, target) {
    // Write your solution here
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    
    return [];
}`);

  const [activeTab, setActiveTab] = useState('description');
  const [language, setLanguage] = useState('javascript');
  const [testResults, setTestResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setTestResults(null);
    
    setTimeout(() => {
      setTestResults([
        { input: 'nums = [2,7,11,15], target = 9', expected: '[0,1]', actual: '[0,1]', passed: true },
        { input: 'nums = [3,2,4], target = 6', expected: '[1,2]', actual: '[1,2]', passed: true },
        { input: 'nums = [3,3], target = 6', expected: '[0,1]', actual: '[0,1]', passed: true }
      ]);
      setIsRunning(false);
    }, 2000);
  };

  const handleSubmit = () => {
    setIsRunning(true);
    setTimeout(() => {
      setTestResults([
        { input: 'Test Case 1', expected: 'Pass', actual: 'Pass', passed: true },
        { input: 'Test Case 2', expected: 'Pass', actual: 'Pass', passed: true },
        { input: 'Test Case 3', expected: 'Pass', actual: 'Pass', passed: true }
      ]);
      setIsRunning(false);
    }, 3000);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Panel - Problem Description */}
      <div className="w-1/2 flex flex-col border-r border-gray-700">
        {/* Problem Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-1 text-xs font-medium bg-green-600 text-white rounded">Easy</span>
              <h1 className="text-xl font-semibold">1. Two Sum</h1>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <ThumbsUp size={16} />
                <span>15.2K</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbsDown size={16} />
                <span>512</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          {['description', 'editorial', 'solutions', 'submissions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium capitalize ${
                activeTab === tab 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          {activeTab === 'description' && (
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Given an array of integers <code className="bg-gray-800 px-2 py-1 rounded text-orange-400">nums</code> and an integer <code className="bg-gray-800 px-2 py-1 rounded text-orange-400">target</code>, 
                return <em>indices of the two numbers such that they add up to target</em>.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                You can return the answer in any order.
              </p>

              <div className="mt-6">
                <h3 className="font-semibold mb-3">Example 1:</h3>
                <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
                  <div><span className="text-gray-400">Input:</span> nums = [2,7,11,15], target = 9</div>
                  <div><span className="text-gray-400">Output:</span> [0,1]</div>
                  <div><span className="text-gray-400">Explanation:</span> Because nums[0] + nums[1] == 9, we return [0, 1].</div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-3">Example 2:</h3>
                <div className="bg-gray-800 p-4 rounded-lg font-mono text-sm">
                  <div><span className="text-gray-400">Input:</span> nums = [3,2,4], target = 6</div>
                  <div><span className="text-gray-400">Output:</span> [1,2]</div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-3">Constraints:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li><code className="bg-gray-800 px-2 py-1 rounded text-orange-400">2 ≤ nums.length ≤ 10⁴</code></li>
                  <li><code className="bg-gray-800 px-2 py-1 rounded text-orange-400">-10⁹ ≤ nums[i] ≤ 10⁹</code></li>
                  <li><code className="bg-gray-800 px-2 py-1 rounded text-orange-400">-10⁹ ≤ target ≤ 10⁹</code></li>
                  <li><strong>Only one valid answer exists.</strong></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Code Editor */}
      <div className="w-1/2 flex flex-col">
        {/* Editor Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-600 focus:outline-none focus:border-blue-400"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white">
              <RotateCcw size={16} />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <Upload size={16} />
            </button>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full p-4 bg-gray-900 text-white font-mono text-sm resize-none focus:outline-none"
            style={{ fontFamily: 'Monaco, Consolas, "Ubuntu Mono", monospace' }}
            placeholder="Write your code here..."
          />
        </div>

        {/* Action Buttons */}
        <div className="p-4 border-t border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white rounded transition-colors"
            >
              <Play size={16} />
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
            <button
              onClick={handleSubmit}
              disabled={isRunning}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-800 text-white rounded transition-colors"
            >
              <Upload size={16} />
              <span>{isRunning ? 'Submitting...' : 'Submit'}</span>
            </button>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>Time: O(n)</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users size={16} />
              <span>Space: O(n)</span>
            </div>
          </div>
        </div>

        {/* Test Results */}
        {testResults && (
          <div className="border-t border-gray-700 max-h-48 overflow-y-auto">
            <div className="p-4">
              <h3 className="font-semibold mb-3 text-green-400">Test Results</h3>
              <div className="space-y-2">
                {testResults.map((result, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg border ${
                      result.passed 
                        ? 'bg-green-900 border-green-700' 
                        : 'bg-red-900 border-red-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Test Case {index + 1}</span>
                      <div className="flex items-center space-x-1">
                        {result.passed ? (
                          <CheckCircle size={16} className="text-green-400" />
                        ) : (
                          <XCircle size={16} className="text-red-400" />
                        )}
                        <span className={result.passed ? 'text-green-400' : 'text-red-400'}>
                          {result.passed ? 'Passed' : 'Failed'}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 font-mono">
                      <div>Input: {result.input}</div>
                      <div>Expected: {result.expected}</div>
                      <div>Actual: {result.actual}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}