import React from 'react';

export default function NklStudentList({ renderNklStudentList }) {
    console.log("Data:", renderNklStudentList);
    let nklElement = renderNklStudentList.map((nklStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{nklStudent.nklId}</td>
                <td>{nklStudent.nklName}</td>
                <td>{nklStudent.nklAge}</td>
                <td>{nklStudent.nklPhone}</td>
                <td>{nklStudent.nklEmail}</td>
                <td>{nklStudent.nklStatus}</td>
                <td>
                    edit/delete
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã SV</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nklElement}
                </tbody>
            </table>
        </div>
    );
}
