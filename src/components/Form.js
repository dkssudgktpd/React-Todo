import React from "react";

export default function Form({ formSubmit, value, setValue }) {
  // 할 일 입력창 처리 관련
  const formChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <form className="flex pt-2" onSubmit={formSubmit}>
        <input
          type="text"
          name="value"
          placeholder="할 일을 입력하세요."
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
          value={value}
          onChange={formChange}
        />
        <input type="submit" value="입력" className="p-2 text-blue-400 border-2 border-blue-400 rounded cursor-pointer hover:text-white hover:bg-blue-900"/>
      </form>
    </div>
  );
}
