/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";
const GostSchema = z.object({
    name: z.string().min(3, "Ime mora imati najmanje 3 karaktera"),
    age: z.number().positive("Godine moraju biti pozitivan broj"),
    email: z.string().email("Neispravan format email adrese"),
    });
    type Gost = z.infer<typeof GostSchema>;
  export default GostSchema; ;
