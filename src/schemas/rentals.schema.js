import Joi from "joi";

export const rentalsSchema = Joi.object({
  customerId: Joi.number().required(),
  gameId: Joi.number().required(),
  rentDate: Joi.date().required(),
  daysRented: Joi.number().positive().required(),
  returnDate: Joi.date().allow(null),
  originalPrice: Joi.number().required(),
  delayFee: Joi.number().allow(null),
});
