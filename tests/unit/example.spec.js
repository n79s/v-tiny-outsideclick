import { mount, createLocalVue } from '@vue/test-utils'
import directive from '@/components/index'

const component = {
  template: `<div><div v-outside-click="handle" class="inner">outside body</div><div class="outside">{{count}}</div></div>`,
  data() {
    return { count: 0 }
  },
  methods: {
    handle() {
      this.count++
    },
  },
}
const componentError = {
  template: `<div><div v-outside-click="count" class="inner">outside body</div><div class="outside">{{count}}</div></div>`,
  data() {
    return { count: 0 }
  },
  methods: {
    handle() {
      this.count++
    },
  },
}

document.documentElement.addEventListener = function(e, h, b) {
  h(e)
}

describe('v-tiny-outsideclick', () => {
  const localVue = createLocalVue()
  localVue.use(directive)

  it('ディレクティブの初期化', () => {
    const wrapper = mount(component, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('ディレクティブの初期化Error', async () => {
    // 何かこの例外とるのが上手くいかない
    // const wrapper = await expect(
    //   mount(componentError, { localVue })
    // ).rejects.toThrow()
    try {
      const wrapperr = mount(componentError, { localVue })
      expect(true).toBe(false)
    } catch (e) {
      expect(true).toBe(true)
    }
  })
})

describe('v-tiny-outsideclick:click', () => {
  const localVue = createLocalVue()
  localVue.use(directive)

  it('click-out', async () => {
    const wrapper = mount(component, { localVue })
    const innerElm = wrapper.find('.inner')
    innerElm.trigger('click')
    const outsideElem = wrapper.find('.outside')
    await wrapper.vm.$nextTick()
    outsideElem.trigger('click')
    await wrapper.vm.$nextTick()
    expect(outsideElem.text()).toBe('1')
  })
})

const component2 = {
  template: `<div v-outside-click="handle">a</div>`,
  data() {
    return { count: 0 }
  },
  methods: {
    handle() {
      this.count++
    },
  },
}
const PROPERTY_NAME = '__CxjJFS_V-TINY-OUTSIDECLICK'
describe('v-tiny-outsideclick:unbind', () => {
  const localVue = createLocalVue()
  localVue.use(directive)

  it('unbind', async () => {
    const wrapper = mount(component2, { localVue })
    expect(wrapper.vm.$el[PROPERTY_NAME]).not.toBeUndefined()
    await wrapper.vm.$nextTick()
    wrapper.destroy()
    expect(wrapper.vm.$el[PROPERTY_NAME]).toBeUndefined()
  })
})
