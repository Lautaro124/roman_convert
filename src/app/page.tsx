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
    else {
      setRomanNumbers(convertor(number))
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handlerSubmit}>
        <label htmlFor="number">
          <input
            type="number"
            name="number"
            className="text-black"
          />
        </label>
        <button>Convertir</button>
      </form>
      <section>
        <h3>Resultado: </h3>
        <h1>{romanNumbers}</h1>
      </section>
    </main>
  );
}
