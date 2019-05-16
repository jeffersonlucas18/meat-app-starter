class OrderModel {
  constructor(
   public endereco: string,
  public numero: number,
  public pagamento: string,
  public complemento: string,
  public orderItems: OrderItem[] = []
  ) {}
}

class OrderItem {
  constructor(public quantity: number, public menuid: string ){}
}
export {OrderModel, OrderItem}
