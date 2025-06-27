function BolumTable({ bolumler }) {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <table className="min-w-full rounded-xl">
        <tbody>
          {bolumler.map((dept, i) => (
            <tr key={i} className="group hover:bg-blue-100/50 transition border-b duration-300 transform hover:scale-[1.01]">
              <td className="p-4 font-semibold text-lg group-hover:text-blue-700 w-1/3">{dept.name}</td>
              <td className="p-4 text-gray-600">{dept.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BolumTable;

// tanstack kütüphanesi

// import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

// function BolumTable({ bolumler }) {
//   const columns = [
//     {
//       accessorKey: "name",
//       header: "Bölüm Adı",
//       cell: (info) => (
//         <td className="p-4 font-semibold text-lg group-hover:text-blue-700 w-1/3">
//           {info.getValue()}
//         </td>
//       ),
//     },
//     {
//       accessorKey: "desc",
//       header: "Açıklama",
//       cell: (info) => <td className="p-4 text-gray-600">{info.getValue()}</td>,
//     },
//   ];

//   const table = useReactTable({
//     data: bolumler,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div className="overflow-x-hidden overflow-y-hidden">
//       <table className="min-w-full rounded-xl">
//         <tbody>
//           {table.getRowModel().rows.map((row, i) => (
//             <tr
//               key={i}
//               className="group hover:bg-blue-50 transition border-b duration-300 transform hover:scale-[1.01]"
//             >
//               {row.getVisibleCells().map((cell) =>
//                 flexRender(cell.column.columnDef.cell, cell.getContext())
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BolumTable;



// chakra-ui kütüphanesi

// import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

// function BolumTable({ bolumler }) {
//   return (
//     <Table variant="simple">
//       <Thead>
//         <Tr>
//           <Th>Bölüm Adı</Th>
//           <Th>Açıklama</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {bolumler.map((dept, i) => (
//           <Tr
//             key={i}
//             _hover={{ backgroundColor: "blue.50", transform: "scale(1.01)" }}
//             transition="all 0.3s"
//           >
//             <Td fontWeight="semibold" color="blue.700">
//               {dept.name}
//             </Td>
//             <Td color="gray.600">{dept.desc}</Td>
//           </Tr>
//         ))}
//       </Tbody>
//     </Table>
//   );
// }

// export default BolumTable;


