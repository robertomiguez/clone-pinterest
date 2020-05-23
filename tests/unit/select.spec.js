import { shallowMount } from '@vue/test-utils'
import Select from '@/components/forms/Select.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Select, {
    propsData: {
      options: ['op1', 'op2']
    },
    mocks: {},
    stubs: {},
    methods: {}
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Card', () => {
  test('testing component props', () => {
    expect(wrapper.find('.select-css').text())
      .toBe(`Select one 
        op1
    
        op2`)
  })

  test('regression test', () => {
    expect(wrapper.element)
      .toMatchSnapshot()
  })
})
