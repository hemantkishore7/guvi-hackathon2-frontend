import React from "react";
import{ Seatmap }from "react-seatmap";



export default function App() {
  const rows = [
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 }
    ],
    [],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
      { number: 12 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 },
      { number: 12 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 },
      { number: 11 }
    ],
    [
      { number: 1 },
      { number: 2 },
      { number: 3, isReserved: true },
      { number: 4 },
      { number: 5 },
      { number: 6 },
      { number: 7 },
      { number: 8 },
      { number: 9 },
      { number: 10 }
    ]
  ];
  
  return (
    <div className="App">
      <h1 className="screen">SCREEN</h1>
      <Seatmap rows={rows} maxReservableSeats={100} visible />
      <div className="seat-select">
        <h1>SEAT:</h1>
      </div>
      
    </div>
  );
}
