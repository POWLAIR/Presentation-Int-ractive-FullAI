import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { motion } from 'framer-motion';

Chart.register(...registerables);

const PerformanceChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Destroy previous chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
              {
                label: 'Livrés',
                data: [250, 270, 290, 310, 330],
                backgroundColor: '#4ade80',
                borderRadius: 5
              },
              {
                label: 'En retard',
                data: [40, 35, 30, 25, 20],
                backgroundColor: '#fbbf24',
                borderRadius: 5
              },
              {
                label: 'Annulés',
                data: [20, 18, 15, 12, 10],
                backgroundColor: '#f87171',
                borderRadius: 5
              },
              {
                label: 'Remboursements',
                data: [15, 12, 10, 8, 6],
                backgroundColor: '#60a5fa',
                borderRadius: 5
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: 'white',
                  font: {
                    size: 12
                  }
                }
              }
            },
            scales: {
              x: {
                grid: {
                  display: false,
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: 'white'
                }
              },
              y: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                  color: 'white'
                }
              }
            }
          }
        });
      }
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <motion.div 
      className="w-full h-[400px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <canvas ref={chartRef}></canvas>
    </motion.div>
  );
};

export default PerformanceChart;