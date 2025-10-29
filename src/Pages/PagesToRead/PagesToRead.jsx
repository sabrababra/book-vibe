import React, { useEffect, useState } from 'react';
import { BarChart, Bar, YAxis, Tooltip, Cell } from 'recharts';

const PagesToRead = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(item => setBooks(item));
    }, []);

    // Custom triangle shape path
    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
        C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
        C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
        Z`
    );

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // Custom Tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const book = payload[0].payload;
            return (
                <div
                    style={{
                        backgroundColor: 'white',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(0,0,0,0.15)',
                        textAlign: 'center'
                    }}
                >
                    <p style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>{book.name}</p>
                    <p style={{ margin: 0, color: '#555' }}>Pages: {book.pages}</p>
                </div>
            );
        }
        return null;
    };

    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];

    const chartData = books.map(book => ({
        name: book.bookName,
        pages: book.totalPages
    }));

    return (
        <div className="flex justify-center mt-10">
            <BarChart
                width={950}
                height={350}
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                    dataKey="pages"
                    shape={<TriangleBar />}
                    label={{
                        position: 'top',
                        fill: '#333',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;
