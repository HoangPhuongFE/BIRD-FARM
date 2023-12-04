import PrismaService from "../../src/services/prisma.service";
import { SqlConstraint } from "../type/sql.type";

const prisma = PrismaService.getInstance();

//NOTE - get all collumn have unique constraint in db
/**
 *
 * @returns
    [ { constraint_name: 'Nest_name_key', column_name: 'name_column' } ]
 */
export const getUniqueConstraintColumn = async () => {
  const constraints = await prisma.$queryRaw`
    SELECT 
      tc.constraint_name, 
      kcu.column_name 
    FROM 
      information_schema.table_constraints AS tc 
      JOIN information_schema.key_column_usage AS kcu
        ON tc.constraint_name = kcu.constraint_name
    WHERE 
      tc.table_name = 'Nest' AND
      tc.constraint_type = 'UNIQUE'
  `;
  if (Array.isArray(constraints)) {
    const collumn = constraints.map((item: SqlConstraint) => item.column_name);
    return collumn;
  } else {
    throw new Error("sql error");
  }
};
