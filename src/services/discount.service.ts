import { Discount, Prisma } from "@prisma/client";

import PrismaService from "./prisma.service";
import { updateBird } from "../services/bird.service";
import { updateNest } from "../services/nest.service";

const prisma = PrismaService.getInstance();

// Get all discounts
export const getAllDiscounts = async (params: {
  skip?: number;
  take?: number;
  cursor?: Prisma.DiscountWhereUniqueInput;
  where?: Prisma.DiscountWhereInput;
  orderBy?: Prisma.DiscountOrderByWithRelationInput;
}): Promise<Discount[]> => {
  return prisma.discount.findMany(params);
};

// Get single discount by ID
export const getDiscountById = async (
  id: Prisma.DiscountWhereUniqueInput
): Promise<Discount | null> => {
  return prisma.discount.findUnique({ where: id });
};

// Create a new discount
export const createDiscount = async (
  data: Prisma.DiscountCreateInput
): Promise<Discount> => {
  return prisma.discount.create({ data });
};

// Update an existing discount
export const updateDiscount = async (
  id: Prisma.DiscountWhereUniqueInput,
  data: Prisma.DiscountUpdateInput
): Promise<Discount> => {
  return prisma.discount.update({
    where: id,
    data,
  });
};

// Delete a discount
export const deleteDiscount = async (
  id: Prisma.DiscountWhereUniqueInput
): Promise<Discount> => {
  return prisma.discount.delete({ where: id });
};

//apply
export const applyDiscount = async (
  id: Prisma.DiscountWhereUniqueInput,
  listOfId: number[]
) => {
  const discount: Discount | null = await prisma.discount.findUnique({
    where: id,
  });
  console.log(discount);
  if (discount != null) {
    if (discount.type == 1) {
      listOfId.forEach(async (element) => {
        await updateBird({ id: element }, { Discount: { connect: id } });
      });
    } else if (discount.type == 2) {
      listOfId.forEach(async (element) => {
        await updateNest({ id: element }, { Discount: { connect: id } });
      });
    }
    return "success";
  }
  throw new Error("Can not found discount");
};
