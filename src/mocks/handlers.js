/// /src/mocks/teams.js
import { rest } from 'msw';

export const handlers = [
 rest.get('http://quepar.local/api/risk_conditions/public', (req, res, ctx) => {
   return res(
     ctx.status(200),
     ctx.json({
       teams: [
         {
           id: 1,
           name: 'Real Madrid',
           arena: 'Palacio de los deportes'
         },
         {
           id: 2,
           name: 'Baskonia',
           arena: 'Buesa Arena'
         }
       ],
     })
   );
 }),

];
