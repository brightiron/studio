import { Module } from '@nestjs/common';

import { AbstractDynamicApp } from '~app/app.dynamic-module';
import { SynthetixAppModule } from '~apps/synthetix';

import { PieDaoContractFactory } from './contracts';
import { EthereumPieDaoBalanceFetcher } from './ethereum/pie-dao.balance-fetcher';
import { EthereumPieDaoEDoughTokenFetcher } from './ethereum/pie-dao.e-dough.token-fetcher';
import { EthereumPieDaoFarmMasterChefContractPositionFetcher } from './ethereum/pie-dao.farm-master-chef.contract-position-fetcher';
import { EthereumPieDaoFarmSingleStakingContractPositionFetcher } from './ethereum/pie-dao.farm-single-staking.contract-position-fetcher';
import { PieDaoAppDefinition } from './pie-dao.definition';

@Module({
  imports: [SynthetixAppModule.externallyConfigured(SynthetixAppModule, 0)],
  providers: [
    PieDaoAppDefinition,
    PieDaoContractFactory,
    // Ethereum
    EthereumPieDaoBalanceFetcher,
    EthereumPieDaoEDoughTokenFetcher,
    EthereumPieDaoFarmSingleStakingContractPositionFetcher,
    EthereumPieDaoFarmMasterChefContractPositionFetcher,
  ],
})
export class PieDaoAppModule extends AbstractDynamicApp<PieDaoAppModule>() {}
