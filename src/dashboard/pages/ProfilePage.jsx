import { useEffect, useState } from 'react';
import { Loading } from '../../components';
import { DashBoardLayout } from '../layout/DashBoardLayout';


export const ProfilePage = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular la carga de datos (reemplazar con la lógica real)
    const fetchData = async () => {
      try {
        // Aquí realizaría la llamada a la API o cualquier otra operación que requiera tiempo
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulación de 2 segundos de carga

        setIsLoading(false); // Ocultar el Loading después de la carga
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Ocultar el Loading incluso en caso de error
      }
    };

    fetchData();
  }, []); 
  return (
    <DashBoardLayout>              

      <Loading open={isLoading}></Loading>
        <h1> Profile page </h1>                    
    </DashBoardLayout>
  )
}
