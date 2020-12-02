import React from "react";

import Input from "../../components/Input/Input";

import styles from "./ProviderProfile.module.scss";

const ProviderProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <p>Revise ou edite seus dados!</p>
      </div>

      <div className={styles.containerForm}>
        <form>
          <fieldset>
            <legend>Seus dados de identificação</legend>

            <Input label="Nome" name="name" type="text" />
            <Input label="E-Mail" name="email" type="email" />
            <Input label="Celular" name="telephone" type="tel" />
            <Input label="Apelido" name="nickname" type="text" />
            <Input label="CPF/CNPJ" name="cpfCnpj" type="text" />
          </fieldset>

          <fieldset>
            <legend>Seus dados de endereço</legend>

            <Input label="Estado" name="state" type="text" />
            <Input label="Cidade" name="city" type="text" />
            <Input label="Bairro" name="neighbourhood" type="text" />
            <Input label="CEP" name="postalCode" type="text" />
            <Input label="Endereço" name="street" type="text" />
            <Input label="Complemento" name="complement" type="text" />
          </fieldset>

          <fieldset>
            <legend>
              Que regiões você atende?
              <button type="button">+ Nova Região</button>
            </legend>

            {[{ regionName: "Região 1" }].map((region, index) => {
              return (
                <Input
                  key={`region${index + 1}`}
                  label={`Região ${index + 1}`}
                  name={`region${index + 1}`}
                  type="text"
                  value={region.regionName}
                  default={region.regionName}
                />
              );
            })}
          </fieldset>

          <fieldset>
            <legend>
              Que serviços você realiza?
              <button type="button">+ Novo Serviço</button>
            </legend>

            {[{ serviceName: "Serviço 1" }].map((service, index) => {
              return (
                <Input
                  key={`service${index + 1}`}
                  label={`Serviço ${index + 1}`}
                  name={`service${index + 1}`}
                  type="text"
                  value={service.serviceName}
                  default={service.serviceName}
                />
              );
            })}
          </fieldset>

          <footer>
            <button type="button" className={styles.containerSubmitButton}>
              Salvar
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default ProviderProfile;
