
import { Check, AlertTriangle, X } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section className="section bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How We Compare</h2>
          <p className="text-lg text-gray-400">
            See why creative professionals prefer Eluvie over traditional accounting tools.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-xl shadow-md border border-gray-700">
            <thead>
              <tr>
                <th className="py-5 px-6 text-left text-gray-400 font-normal text-sm">Feature</th>
                <th className="py-5 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center mb-2">
                      <span className="text-white font-bold">E</span>
                    </div>
                    <span className="font-semibold text-white">Eluvie</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                      <span className="text-gray-300 font-bold">CA</span>
                    </div>
                    <span className="font-semibold text-gray-300">Conta Azul</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                      <span className="text-gray-300 font-bold">QB</span>
                    </div>
                    <span className="font-semibold text-gray-300">QuickBooks</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                      <span className="text-gray-300 font-bold">N</span>
                    </div>
                    <span className="font-semibold text-gray-300">Nibo</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="py-4 px-6 text-gray-300">Built for creatives</td>
                <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-300">Simple visual interface</td>
                <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><AlertTriangle className="h-5 w-5 text-yellow-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><AlertTriangle className="h-5 w-5 text-yellow-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-300">Gamification</td>
                <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-300">Budget to invoice</td>
                <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-300">Subscription tracking</td>
                <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><AlertTriangle className="h-5 w-5 text-yellow-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><AlertTriangle className="h-5 w-5 text-yellow-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><AlertTriangle className="h-5 w-5 text-yellow-400 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-300">Affordable pricing</td>
                <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><AlertTriangle className="h-5 w-5 text-yellow-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><AlertTriangle className="h-5 w-5 text-yellow-400 mx-auto" /></td>
                <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
