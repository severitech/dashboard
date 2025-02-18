import React from "react";

function layoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <div className="justify-center items-center flex flex-col h-full">
      <p>Mi Empresa</p>
      <h1 className='text-3xl my-2'>Bienvenido a mi Empresa!</h1>
      <h2 className="text-2xl mb-3">by Severitech</h2>
      {children}
    </div>
  );
}

export default layoutAuth;
