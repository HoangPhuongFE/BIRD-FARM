import PromiseRouter from "express-promise-router";
import AuthenRouter from "./auth.router";
import AccountRouter from "./account.router";
import SpeciesRouter from "./species.router";
import BirdRouter from "./bird.router";
import NestRouter from "./nest.router";
import DiscountRouter from "./discount.router";
import NotificationRouter from "./notification.router";
import UploadRouter from "./upload.router";
import Feedback from "./feedback.router";
import Delivery from "./delivery.router";
import History from "./history.router";
import Order from "./order.router";
import VerifyToken from "./verify.router";
import OrderItem from "./orderItem.router";

const router = PromiseRouter();

router.use("/auth", AuthenRouter);
router.use("/account", AccountRouter);
router.use("/species", SpeciesRouter);
router.use("/bird", BirdRouter);
router.use("/nest", NestRouter);
router.use("/discount", DiscountRouter);
router.use("/notification", NotificationRouter);
router.use("/upload", UploadRouter);
router.use("/feedback", Feedback);
router.use("/order", Order);
router.use("/history", History);
router.use("/delivery", Delivery);
router.use("/verifyToken", VerifyToken);
router.use("/orderItem", OrderItem);

export default router;
