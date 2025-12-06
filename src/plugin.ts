import streamDeck from "@elgato/streamdeck";
import { GenerateTOTP } from "./actions/generate-totp";


streamDeck.logger.setLevel("info");
streamDeck.actions.registerAction(new GenerateTOTP());
streamDeck.connect();
