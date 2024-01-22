import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/lib/sanity";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";

const CartItem = ({ item }) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex w-full justify-between mb-4 h-[120px] items-center border-b">
      <div className="w-[110px] h-[110px] relative">
        {item.images && (
          <Image
            src={urlFor(item.images[0]).url()}
            fill
            priority
            size="(max-width: 110px), 110px, 110px"
            className="object-contain"
            alt=""
          />
        )}
      </div>
      {/* name, price, quantity, remove */}
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <h5>{item.name}</h5>
          <button>
            <FaX className="text-sm" onClick={() => removeItem(item.id)} />
          </button>
        </div>
        {/* Increment / Decrement */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button onClick={() => decrementItem(item.id)}>
              <FaMinus className="text-[10px]" />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button onClick={() => incrementItem(item.id)}>
              <FaPlus className="text-[10px]" />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">
            ${item.price * item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
