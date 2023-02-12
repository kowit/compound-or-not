import { makeAutoObservable } from 'mobx'
import { TrafficLightColors } from '../interfaces'

const DAYS_IN_YEAR = 365

class CompoundFrequencyStore {
  initialInvestment = 0
  gasCost = 0
  APR = 0
  gainedSoFar = 0
  daysTilNextCompount = 0
  trafficLightColor = TrafficLightColors.GRAY

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  setInitialInvestment(initialInvestment: number) {
    this.initialInvestment = initialInvestment
  }

  setGasCost(gasCost: number) {
    this.gasCost = gasCost
  }

  setAPR(apr: number) {
    this.APR = apr
  }

  setGainedSoFar(gainedSoFar: number) {
    this.gainedSoFar = gainedSoFar
  }

  getTrafficLightColor() {
    if (this.daysTilNextCompount === 0) {
      this.trafficLightColor = TrafficLightColors.GRAY
    } else if (this.daysTilNextCompount > 3) {
      this.trafficLightColor = TrafficLightColors.RED
    } else if (this.daysTilNextCompount > 0) {
      this.trafficLightColor = TrafficLightColors.GOLD
    } else if (this.daysTilNextCompount < 0) {
      this.trafficLightColor = TrafficLightColors.GREEN
    }
    return this.trafficLightColor
  }

  calculateDaysSinceLastCompound() {
    console.log('\n\n')
    console.log('initialInvestment: ', this.initialInvestment)
    console.log('gasCost: ', this.gasCost)
    console.log('APR: ', this.APR)
    console.log('gainedSoFar: ', this.gainedSoFar)

    let a = 0
    if (this.gainedSoFar > 0) {
      a = this.gainedSoFar / (this.initialInvestment * this.APR)
    }
    let sum = a * DAYS_IN_YEAR

    console.log('sum:', sum)

    if (!this.initialInvestment || !this.gasCost || !this.APR || !this.gainedSoFar) {
      return 'NaN'
    } else {
      return parseFloat(sum.toFixed(4)) * 100.0
    }
  }

  calculateDaysTillNextCompound() {
    if (!this.initialInvestment || !this.gasCost || !this.APR || !this.gainedSoFar) {
      return 'NaN'
    } else {
      const daysSinceLastCompound = this.calculateDaysSinceLastCompound()
      const optimumCompoundDays = compoundFrequencyStore.calculateOptimumCompoundDays()
      if (daysSinceLastCompound === 'NaN' || optimumCompoundDays.days === 'NaN') {
        return 'NaN'
      }
      this.daysTilNextCompount = Number(optimumCompoundDays.days) - daysSinceLastCompound
      parseFloat(this.daysTilNextCompount.toFixed(4))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }

  calculateOptimumCompoundDays() {
    if (!this.initialInvestment || !this.gasCost || !this.APR) {
      return { days: 'NaN', amount: 'NaN' }
    }
    let optimum = -99999999
    let i = 1
    let continueWhile = true
    while (i < 10000 && continueWhile) {
      // 1000 loops or after optimum is found
      const APRDecimal = this.APR / 100
      const value =
        this.initialInvestment * Math.pow(1 + APRDecimal / (DAYS_IN_YEAR / i), DAYS_IN_YEAR / i) +
        (this.gasCost - this.gasCost * Math.pow(1 + APRDecimal / (DAYS_IN_YEAR / i), DAYS_IN_YEAR / i)) /
          (APRDecimal / (DAYS_IN_YEAR / i))
      if (value > 0) {
        // value must be greater than zero
        if (value > optimum) {
          optimum = value
        } else {
          continueWhile = false
        }
      }
      i++
    }
    return {
      days: i - 2,
      amount: optimum
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}

const compoundFrequencyStore = new CompoundFrequencyStore()

export default compoundFrequencyStore
