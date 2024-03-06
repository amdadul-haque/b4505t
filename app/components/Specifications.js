// Specifications.js

import React from 'react';
import SectionTitle from './SectionTitle';

const Specifications = () => {

  const specificationsData = [
    { label: "Product Cost", value: "$200" },
    { label: "Price To Install (Range)", value: "$125-$250" },
    { label: "Installation Warranty", value: "90 Days to 1 Year" },
    { label: "Total Product Installed (Range)", value: "$325 - $459" },
    { label: "Bulb Type", value: "LED" },
    { label: "Doors Operated by Remote", value: "1" },
    { label: "Garage Door Opener Horsepower (hp)", value: "1 1/4 hp" },
    { label: "Mounting Location", value: "Ceiling Mounted" },
    { label: "Pack Size", value: "1 Pack" },
    { label: "Product Type", value: "With Battery Backup" },
    { label: "Remote Access", value: "Remote Access" },

    { label: "Installation", value: "90 Days to 1 Year" },
    { label: "Commercial/Residential", value: "Residential" },
    { label: "Features", value: "Automatic Locking System, Battery Backup Function, Camera, Illuminated Wall Control, Motion Activated Light, Timer-to-Close" },
    { label: "Included", value: "Batteries, Hardware, Instructions, Remote Control" },
    { label: "Opener Type", value: "Belt Drive, Smart" },
    { label: "Power Options", value: "Plug-in" },
    { label: "Product Weight (lb.)", value: "32.2 lb" },
    { label: "Smart Home Protocol", value: "Wi-Fi" }
  ];

  const accessoriesData = [
    {
      label: "Frequency",
      value: "Yellow Button 2011 – 2022 (Security+ 2.0)"
    },
    {
      label: "Type",
      value: "Chamberlain Accessories"
    },
    {
      label: "Remote",
      value: "950EV, 953EV-P2, 956EV-P2 KLIK5U-SS, KLIK5U-BK2, MC100-P2"
    },
    {
      label: "Keypad",
      value: "KLIK2U-P2, 940EV-P2"
    },
    {
      label: "Type",
      value: "Liftmaster Accessories"
    },
    {
      label: "Remote",
      value: "374UT, 374UTMC, 375UT, 375LM, 375UTMC, 380UT, 380UTMC, 890MAX, 890MAXMC, 891LM, 892LT, 893LM, 893MAX, 893MAXMC, 894LT"
    },
    {
      label: "Keypad",
      value: "387LM, 387LMMC, 877LM, 877Max, 878MAX, 878MAXMC, 895MAX"
    }
  ];




  return (
    <div className='py-10' id="specifications">
      <SectionTitle title='Specifications' />
      <div className='w-full grid grid-cols-2 md:grid-cols-4'>
        {
          specificationsData.map((specification, index) => (
            <div key={index} className="px-4 py-2 text-left text-xs font-medium text-gray-500 border">
              <p>{specification.label}</p>
              <p className="text-sm font-medium text-gray-900">{specification.value}</p>
            </div>
          ))
        }
      </div>
      <h2 className='my-8 text-center text-2xl font-medium'>Remotes & Keypad Accesories</h2>
      <div className='w-full'>
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {accessoriesData.map((specification, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-left text-sm font-medium text-gray-500 border">{specification.label}</td>
                <td className="px-4 py-2 text-left text-sm font-medium text-gray-900 border">{specification.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Specifications;
