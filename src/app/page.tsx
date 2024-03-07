'use client'
import { FormEvent, useState } from "react";
import { convertor } from "@/utils/roman_convertor";

export default function Home() {
  const [romanNumbers, setRomanNumbers] = useState<string>('')

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const number = event.currentTarget.number.value
    if (number >= 4000) {
      setRomanNumbers('El numero es mayor a 3000')
    }
    else if (number <= 0) {
      setRomanNumbers('El numero no puede ser 0 ni menor a tal')
    }
    else {
      setRomanNumbers(convertor(number))
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 gap-8">
      <form
        onSubmit={handlerSubmit}
        className="flex flex-col gap-3"
      >
        <label htmlFor="number" className="text-lg">
          Ingrese un número entero:
        </label>
        <input
          type="number"
          name="number"
          className="text-black border rounded-md p-2"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          Convertir
        </button>
      </form>
      <section>
        <h3 className="text-lg font-semibold">Resultado: </h3>
        <h1 className="text-3xl">{romanNumbers}</h1>
      </section>
    </main>
  );
}
