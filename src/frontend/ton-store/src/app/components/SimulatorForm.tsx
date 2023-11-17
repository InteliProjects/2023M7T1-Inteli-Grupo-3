import React, { useState } from "react";
import { IInput } from "../interfaces/IInput";
import InputText from "./InputText";
import RoundedButton from "./RoundedButton";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SimulatorForm() {
  const router = useRouter();

  // Use o estado para armazenar o valor como uma string
  const [sales, setSales] = useState<IInput>({
    id: 'sales',
    name: 'sales',
    placeholder: 'Valor bruto mensal de vendas em cartão',
    disabled: false,
    value: '', // Armazena o valor como uma string
    onChange: handleSalesChange,
  });


  function handleSalesChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Armazene o valor formatado como uma string no estado
    setSales({
      ...sales,
      value: e.target.value,
      type: "number"
    });
  }

  // Função para imprimir o valor final no console
  function printFinalValue() {
    var inputString = sales.value;
    var numericString = inputString.replace(/[^\d,]/g, '');
    var numberWithDot = numericString.replace(',', '.');
    var extractedNumber = parseFloat(numberWithDot);

    if (extractedNumber < 7000) {
      router.push("/product/ton");
    } else if (extractedNumber >= 7000 && extractedNumber < 15000) {
      router.push("/product/padrao");
    } else {
      router.push("/product/smart");
    }
  }

  return (
    <>
      <InputText data={sales} />
      <RoundedButton text="Simular" width="w-auto" onClick={printFinalValue} />
    </>
  );
}
