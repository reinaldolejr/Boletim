
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import vuetify from "vuetify"
import Vue from 'vue';
import router from "@/router";
describe('Header.vue', () => {
  let wrapper;
  let title = 'Boletim'
  beforeEach(() => {
    Vue.use(vuetify);
    Vue.use(router);
    wrapper = shallowMount(Header);
  });

  it('renders a vue instance', () => {
    expect(shallowMount(Header).isVueInstance()).toBe(true);
    expect(wrapper).toMatchSnapshot()
  });

  it('renders title', () => {
    wrapper = shallowMount(Header, {
      propsData: {
        title
      }
    });
    expect(wrapper.find("[data-name='title']").text()).toEqual("Boletim");
    expect(wrapper).toMatchSnapshot()
  });

  it('renders title and menu', () => {
    let menu = [{
      name: "Home",
      link: "/",
    }];


    wrapper = shallowMount(Header, {
      propsData: {
        title,
        menu
      }
    });

    expect(wrapper.find('[data-name="title"]').text()).toEqual("Boletim");
    expect(wrapper.find('[data-name="menu"]').exists()).toBe(true);
    expect(wrapper.find('[data-name="menu"]').text()).toEqual("Home");
    expect(wrapper).toMatchSnapshot()

  });

  it('renders title and two menus', () => {
    let menu = [{
      name: "Home",
      link: "/",
    },
    {
      name: "Report",
      link: "/report",
    }];

    wrapper = shallowMount(Header, {
      propsData: {
        title,
        menu
      }
    });

    expect(wrapper.find('[data-name="title"]').text()).toEqual("Boletim");
    expect(wrapper.find('[data-name="menu"]').exists()).toBe(true);
    expect(wrapper.findAll('[data-name="menu"]')).toHaveLength(2);
    expect(wrapper).toMatchSnapshot()

  });
})

