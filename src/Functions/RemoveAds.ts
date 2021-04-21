import Purchases, { PurchasesPackage } from 'react-native-purchases';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EnvConfig from 'react-native-config';

Purchases.setDebugLogsEnabled(true);
Purchases.setup(EnvConfig.REVENUECAT_PUBLIC_APP_ID);

async function setEnableRemoveAds(remove: boolean): Promise<void> {
    await AsyncStorage.setItem('RemoveAds', String(remove));
}

export async function getEnableRemoveAds(): Promise<boolean> {
    const removed = await AsyncStorage.getItem('RemoveAds');

    if (!removed || removed === 'false') {
        return false;
    }

    return true;
}

export async function isRemoveAdsActive(): Promise<boolean> {
    try {
        const purchaserInfo = await Purchases.getPurchaserInfo();

        if (
            typeof purchaserInfo.entitlements.active.removeAds !== 'undefined'
        ) {
            await setEnableRemoveAds(true);
            return true;
        }
        await setEnableRemoveAds(false);
        return false;
    } catch (e) {
        throw new Error(e);
    }
}

export async function getPurchasesDetails(): Promise<Array<PurchasesPackage>> {
    try {
        const offerings = await Purchases.getOfferings();

        const packages: Array<PurchasesPackage> = [];

        if (offerings.current && offerings.current.lifetime !== null) {
            packages.push(offerings.current.lifetime);
        }

        return packages;
    } catch (err) {
        throw new Error(err);
    }
}

export async function makePurchase(
    purchasePackage: PurchasesPackage
): Promise<void> {
    try {
        const {
            purchaserInfo,
            // productIdentifier,
        } = await Purchases.purchasePackage(purchasePackage);

        // console.log(productIdentifier);
        // console.log(purchaserInfo);
        if (
            typeof purchaserInfo.entitlements.active.removeAds !== 'undefined'
        ) {
            await setEnableRemoveAds(true);
        }
    } catch (e) {
        if (e.userCancelled) {
            throw new Error('User cancel payment');
        }
        if (!e.userCancelled) {
            throw new Error(e);
        }
    }
}

export async function RestorePurchasers(): Promise<void> {
    try {
        const restore = await Purchases.restoreTransactions();
        // ... check restored purchaserInfo to see if entitlement is now active

        if (restore.activeSubscriptions.length > 0) {
            await setEnableRemoveAds(true);
        }
    } catch (e) {
        throw new Error(e.message);
    }
}

// Chama a função para verificar se usuário tem inscrição ativa (como o arquivo é importado
// na home ele verifica e já marca nas configurações a resposta)
isRemoveAdsActive().then(() => console.log('Purchases checked'));
