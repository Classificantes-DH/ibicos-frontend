import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";

const FormProviderRegionsServices = (props) => {
  const {
    values: { regions, services },
    handleFieldChange,
    addRegion,
    addService,
  } = props;

  return (
    <>
      <fieldset>
        <legend>
          Que regiões você atende?
          <button type="button" onClick={addRegion}>
            + Nova Região
          </button>
        </legend>

        {regions.map((region, index) => {
          return (
            <Input
              key={`region${index + 1}`}
              label={`Região ${index + 1}`}
              name={`region${index + 1}`}
              type="text"
              onChange={handleFieldChange}
              value={region.regionName}
              default={region.regionName}
            />
          );
        })}
      </fieldset>

      <fieldset>
        <legend>
          Que serviços você realiza?
          <button type="button" onClick={addService}>
            + Novo Serviço
          </button>
        </legend>

        {services.map((service, index) => {
          return (
            <Input
              key={`service${index + 1}`}
              label={`Serviço ${index + 1}`}
              name={`service${index + 1}`}
              type="text"
              onChange={handleFieldChange}
              value={service.serviceName}
              default={service.serviceName}
            />
          );
        })}
      </fieldset>
    </>
  );
};

FormProviderRegionsServices.propTypes = {
  values: PropTypes.shape({
    regions: PropTypes.arrayOf(
      PropTypes.shape({
        regionName: PropTypes.string,
      })
    ),
    services: PropTypes.arrayOf(
      PropTypes.shape({
        serviceName: PropTypes.string,
      })
    ),
  }).isRequired,
  addRegion: PropTypes.func.isRequired,
  addService: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};

export default FormProviderRegionsServices;
