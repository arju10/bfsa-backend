import { Supplier } from './supplier.model';

export const generateSupplierId = async (): Promise<string> => {
  const currentYear = new Date().getFullYear();
  const lastSupplier = await Supplier.findOne().sort({ createdAt: -1 }).exec();

  let incrementNumber = 1;
  if (lastSupplier) {
    const lastSupplierId = lastSupplier.supplierId;
    const lastYear = parseInt(lastSupplierId.split('-')[1], 10);

    if (lastYear === currentYear) {
      incrementNumber = parseInt(lastSupplierId.split('-')[2], 10) + 1;
    }
  }

  return `SU-${currentYear}-${incrementNumber.toString().padStart(4, '0')}`;
};
