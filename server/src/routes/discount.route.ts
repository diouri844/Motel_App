import { DiscountRouteAbstract } from "../abstract/routes/discountRoute.abstract"
import { DiscountController } from "../controllers/discount.controller";

export class DiscountRoute extends DiscountRouteAbstract {
    constructor(discountController: DiscountController) {
        super(discountController);
    }

    protected initializeRoutes(): void {
        this.router.post(
            this.path + "/create", this.discountController.createDiscount.bind(this.discountController));
        this.router.post(
            this.path + "/apply", this.discountController.applyDiscount.bind(this.discountController));

        this.router.get(
            this.path + "/item/:disountId", this.discountController.findDiscountById.bind(this.discountController));
        this.router.get(
            this.path + "/list", this.discountController.getAllDiscounts.bind(this.discountController));
        this.router.get(
            this.path + "/valide/list", this.discountController.getValidDiscounts.bind(this.discountController));
        this.router.get(
            this.path + "/check/:discountCode", this.discountController.checkDiscount.bind(this.discountController));
        this.router.delete(
            this.path + "/item/:id", this.discountController.deleteDiscount.bind(this.discountController));
    }
};