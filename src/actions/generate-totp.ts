import { action, KeyDownEvent, SingletonAction, streamDeck } from "@elgato/streamdeck";
import { TOTP } from "totp-generator";
import clipboard from "clipboardy";


type Config = {
	secret?: string;
};

@action({ UUID: "com.ondras.totp.generate" })
export class GenerateTOTP extends SingletonAction<Config> {
	override async onKeyDown(e: KeyDownEvent<Config>): Promise<void> {
		const { settings } = e.payload;

		const { secret } = settings;
		if (secret) {
			const { otp } = await TOTP.generate(secret);
			clipboard.write(otp);
			streamDeck.logger.info(`OTP: ${otp}`);
			e.action.showOk();
		} else {
			e.action.showAlert();
		}
	}
}
