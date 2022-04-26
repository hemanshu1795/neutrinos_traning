/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-list',
  templateUrl: './list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class listComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_z9qnWuoPXuneYpMN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_z9qnWuoPXuneYpMN(bh) {
    try {
      bh = this.sd_rGew8Gn0AYOWAcjh(bh);
      //appendnew_next_sd_z9qnWuoPXuneYpMN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z9qnWuoPXuneYpMN');
    }
  }

  navigateToDetailsPage(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.selectingBlogInSaveToSession(bh);
      //appendnew_next_navigateToDetailsPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PXOwqysepGILOh2u');
    }
  }

  //appendnew_flow_listComponent_start

  sd_rGew8Gn0AYOWAcjh(bh) {
    try {
      this.page.blocks = undefined;
      bh = this.sd_1HaQsqtK2NkwA9ko(bh);
      //appendnew_next_sd_rGew8Gn0AYOWAcjh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rGew8Gn0AYOWAcjh');
    }
  }

  sd_1HaQsqtK2NkwA9ko(bh) {
    try {
      const page = this.page;
      bh.local.listUrl = `${bh.system.environment.properties.ssdURL}list`;
      bh = this.getFetchBlogsFormApi(bh);
      //appendnew_next_sd_1HaQsqtK2NkwA9ko
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1HaQsqtK2NkwA9ko');
    }
  }

  async getFetchBlogsFormApi(bh) {
    try {
      let requestOptions = {
        url: bh.local.listUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.blogs = await this.sdService.nHttpRequest(requestOptions);
      this.sd_2sVG4rPFqwLntURT(bh);
      //appendnew_next_getFetchBlogsFormApi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PmZXzULnh4Pxac4F');
    }
  }

  sd_2sVG4rPFqwLntURT(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.blogs);
      //appendnew_next_sd_2sVG4rPFqwLntURT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2sVG4rPFqwLntURT');
    }
  }

  selectingBlogInSaveToSession(bh) {
    try {
      sessionStorage.setItem('selectedBlog', JSON.stringify(bh.input.event));
      bh = this.navigateToBlogPage(bh);
      //appendnew_next_selectingBlogInSaveToSession
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5DAfsGmpAne4uvmc');
    }
  }

  async navigateToBlogPage(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/detail/:id');
      await this.__page_injector__
        .get(Router)
        .navigate(
          [
            this.sdService.formatPathWithParams(path, {
              id: bh.input.event.id,
            }),
          ],
          {
            queryParams: Object.assign(qprm, ''),
          }
        );
      //appendnew_next_navigateToBlogPage
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DpTzi6LgAXx6ITOY');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_listComponent_Catch
}
