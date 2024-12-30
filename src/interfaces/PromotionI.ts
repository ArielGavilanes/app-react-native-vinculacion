import { Timestamp } from 'firebase/firestore';

export interface PromotionI {
  id: string;
  description: string;
  discount: number;
  minimum_purchase: number;
  name: string;
  validity: Timestamp;
}
