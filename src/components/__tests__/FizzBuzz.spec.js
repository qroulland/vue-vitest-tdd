import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import FizzBuzz from '@/components/FizzBuzz.vue'

describe('FizzBuzz', () => {
  it('Should return empty when number is null', () => {
    const component = mount(FizzBuzz, { props: { number: null } })

    expect(component.vm.print(component.props().number)).toBe("")
  })

  it('Should return same number', () => {
    const component = mount(FizzBuzz, { props: { number: 1 } })

    expect(component.vm.print(component.props().number)).toBe(1)
  })

  it('Should return FIZZ when multiplier of 3', () => {
    const component = mount(FizzBuzz, { props: { number: 3 } })

    expect(component.vm.print(component.props().number)).toBe('FIZZ')
  })

  it('Should return BUZZ when multiplier of 5', () => {
    const component = mount(FizzBuzz, { props: { number: 5 } })

    expect(component.vm.print(component.props().number)).toBe('BUZZ')
  })

  it('Should return FIZZBUZZ when multiplier of 3 and 5', () => {
    const component = mount(FizzBuzz, { props: { number: 15 } })

    expect(component.vm.print(component.props().number)).toBe('FIZZBUZZ')
  })

  it('Should render properly', () => {
    const component = mount(FizzBuzz, { props: { number: 30 } })

    expect(component.text()).toContain('Result: FIZZBUZZ')
  })
})
