import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NklStudentList from './components/NklStudentList';

function NklApp() {
  // Sử dụng hàm useState của hook 
  const [nklStudentList, setNklStudentList] = useState([]);
  
  // get data from api
  const nklGetStudent = async () => {
    try {
      const response = await axios.get("https:// 666a5af57013419182cef77b .mockapi.io /api/nklv1/thpStudent");
      setNklStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    nklGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      <h2 className='text-center'>Xử lý các chức năng CRUD - Hook</h2>
      <hr />
      <NklStudentList renderNklStudentList={nklStudentList} />
    </div>
  );
}

export default NklApp;
