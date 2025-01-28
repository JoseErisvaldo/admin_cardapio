export default function Table({ title, subtitle, headers, data, }) {

  
    return (
      <div className="overflow-x-auto p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 mb-2">{subtitle}</p>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-2 text-left border border-gray-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border border-gray-300">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2 border border-gray-300">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  