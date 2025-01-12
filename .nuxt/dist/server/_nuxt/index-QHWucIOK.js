import { mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/vue/20/solid";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        name: "Push to deploy.",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: CloudArrowUpIcon
      },
      {
        name: "SSL certificates.",
        description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        icon: LockClosedIcon
      },
      {
        name: "Database backups.",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: ServerIcon
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden bg-white py-24 sm:py-32" }, _attrs))}><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"><div class="lg:pr-8 lg:pt-4"><div class="lg:max-w-lg"><h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2><p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A better workflow</p><p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p><dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="relative pl-9"><dt class="inline font-semibold text-gray-900">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), {
          class: "absolute left-1 top-1 size-5 text-indigo-600",
          "aria-hidden": "true"
        }, null), _parent);
        _push(` ${ssrInterpolate(feature.name)}</dt> ${ssrInterpolate(" ")} <dd class="inline">${ssrInterpolate(feature.description)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div><img src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-QHWucIOK.js.map
