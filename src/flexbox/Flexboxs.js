import React from "react";

export default function Flexboxs() {
  return (
    <div>
      {/* <div class="container">
        <div class="item">Header</div>
        <div class="item">Sidebar</div>
        <div class="item">Content</div>
        <div class="item">Footer</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
      </div> */}
      <div class="flex gap-[2%] flex-wrap content-start">
        <div class="w-full h-[5%] bg-red-400">Header</div>
        <div class="w-1/4 h-3/4 bg-yellow-300">Sidebar</div>
        <div class="grow h-3/4 bg-green-300">Content</div>
        <div class="w-full h-[5%] bg-blue-300">Footer</div>
        <div class="bg-purple-300 p-2">5</div>
        <div class="bg-pink-300 p-2">6</div>
        <div class="bg-orange-300 p-2">7</div>
        <div class="bg-teal-300 p-2">8</div>
        <div class="bg-indigo-300 p-2">9</div>
      </div>
      <div class="flex flex-row gap-[2%] flex-wrap">
        <div class="h-[32%] w-[40%] bg-red-400 text-white flex items-center justify-center">
          1
        </div>
        <div class="h-[32%] w-[30%] bg-blue-400 text-white flex items-center justify-center">
          2
        </div>
        <div class="h-[32%] grow bg-green-400 text-white flex items-center justify-center">
          3
        </div>
        <div class="h-[32%] w-1/4 bg-yellow-400 text-black flex items-center justify-center">
          4
        </div>
        <div class="h-[32%] w-[40%] bg-purple-400 text-white flex items-center justify-center">
          5
        </div>
        <div class="h-[32%] grow bg-pink-400 text-white flex items-center justify-center">
          6
        </div>
        <div class="h-[32%] w-[40%] bg-indigo-400 text-white flex items-center justify-center">
          7
        </div>
        <div class="h-[32%] w-[40%] bg-teal-400 text-white flex items-center justify-center">
          8
        </div>
        <div class="h-[32%] grow bg-orange-400 text-white flex items-center justify-center">
          9
        </div>
      </div>
      <div class="flex gap-[2%] flex-wrap">
        <div class="w-[28%] h-[32%] bg-red-400 text-white flex items-center justify-center">
        <img
            src="/img/1.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[28%] h-[32%] bg-blue-400 text-white flex items-center justify-center">
        <img
            src="/img/2.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[28%] h-[32%] bg-green-400 text-white flex items-center justify-center">
        <img
            src="/img/3.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[32%] h-[32%] bg-yellow-400 text-black flex items-center justify-center">
          4
        </div>
        <div class="w-[32%] h-[32%] bg-purple-400 text-white flex items-center justify-center">
          5
        </div>
        <div class="w-[32%] h-[32%] bg-pink-400 text-white flex items-center justify-center">
          6
        </div>
        <div class="w-[32%] h-[32%] bg-indigo-400 text-white flex items-center justify-center">
          7
        </div>
        <div class="w-[32%] h-[32%] bg-teal-400 text-white flex items-center justify-center">
          8
        </div>
        <div class="w-[32%] h-[32%] bg-orange-400 text-white flex items-center justify-center">
          9
        </div>
      </div>
      <div class="flex gap-[2%] flex-wrap">
        <div class="w-[23.5%] h-[23.5%] bg-red-400 text-white flex items-center justify-center">
        <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-blue-400 text-white flex items-center justify-center">
        <img
            src="/img/kakshi.jpg"
            alt="Kakashi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-green-400 text-white flex items-center justify-center">
        <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-yellow-400 text-black flex items-center justify-center">
        <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-purple-400 text-white flex items-center justify-center">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-pink-400 text-white flex items-center justify-center">
        <img
            src="/img/kakshi.jpg"
            alt="Kakashi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-indigo-400 text-white flex items-center justify-center">
        <img
            src="/img/kakshi.jpg"
            alt="Kakashi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-teal-400 text-white flex items-center justify-center">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-orange-400 text-white flex items-center justify-center">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-cyan-400 text-white flex items-center justify-center">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-lime-400 text-black flex items-center justify-center">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-rose-400 text-white flex items-center justify-center">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-emerald-400 text-white flex items-center justify-center">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-sky-400 text-white flex items-center justify-center">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-fuchsia-400 text-white flex items-center justify-center">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[23.5%] h-[23.5%] bg-amber-400 text-black flex items-center justify-center">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="flex gap-[20px] flex-col">
        <div class="w-[40%] bg-red-400 text-white p-4 flex items-center justify-center">
        <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[80%] bg-blue-400 text-white p-4 flex items-center justify-center">
        <img
            src="/img/kakshi.jpg"
            alt="Kakashi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full bg-green-400 text-white p-4 flex items-center justify-center">
        <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-1/4 bg-yellow-400 text-black p-4 flex items-center justify-center">
        <img
            src="/img/kakshi.jpg"
            alt="Kakashi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[35%] bg-purple-400 text-white p-4 flex items-center justify-center">
        <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="flex gap-[20px] items-end">
        <div class="h-[40%] bg-red-400 text-white flex items-center justify-center w-16">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-[80%] bg-blue-400 text-white flex items-center justify-center w-16">
        <img
            src="/img/kakshi.jpg"
            alt="Kakashi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-full bg-green-400 text-white flex items-center justify-center w-16">
        <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-1/4 bg-yellow-400 text-black flex items-center justify-center w-16">
        <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-[35%] bg-purple-400 text-white flex items-center justify-center w-16">
        <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="flex gap-[20px]">
        <div class="grow bg-red-400 text-white flex items-center justify-center h-24">
        <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="grow bg-blue-400 text-white flex items-center justify-center h-24">
        <img
            src="/img/kakshi.jpg"
            alt="Kakashi"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="grow bg-green-400 text-white flex items-center justify-center h-24">
        <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="flex flex-wrap gap-6 p-6 bg-gray-100 justify-center">
        <div class="w-64 h-80 border-4 border-gray-400 p-2 bg-white shadow-md">
          <img
            src="/img/naruto.jpg"
            alt="Naruto"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-64 h-80 border-4 border-blue-400 p-2 bg-white shadow-md">
          <img
            src="/img/kakshi.jpg"
            alt="Kakashi"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-64 h-80 border-4 border-green-400 p-2 bg-white shadow-md">
          <img
            src="/img/hitach.jpg"
            alt="Itachi"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-64 h-80 border-4 border-red-400 p-2 bg-white shadow-md">
          <img
            src="/img/naruto2.png"
            alt="Placeholder"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-64 h-80 border-4 border-purple-400 p-2 bg-white shadow-md">
          <img
            src="/img/tanjirok.jpg"
            alt="Placeholder 2"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
