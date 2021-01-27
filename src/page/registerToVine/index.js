import "./registerToVine.css";
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import FooterCom from "../../components/FooterCom/FooterCom";
import img1 from "./backMan.png";
import img2 from "./vine_bottom.png";
function registerToVine() {
  return (
    <div className="registerToVine-box">
      <HeaderCom />
      <img className="registerToVine-img1" src={img1} />
      <div className="registerToVine-title1">
        <div>加入成千上万个已将其商品注册到Amazon Vine的品牌</div>
      </div>
      <div className="registerToVine-introduce">
        <div className="registerToVine-introduce1">
          <span>在不销售商品的情况下，几天之内就能获得对您商品的可信评论</span>
          <div>
            轻松为Vine评论者（称为Voices）注册符合条件的优惠，已免费申请。在请求您的注册产品后，Voices会在平均22天内发布评论。
          </div>
        </div>
        <div className="registerToVine-introduce2">
          <span>提高流量并提高转化率</span>
          <div>
            评论是客户销量的最大驱动因素之一。90%的客户阅读买家评论并根据这些评论做出购买决定。
          </div>
        </div>
        <div className="registerToVine-introduce3">
          <span>更好的了解您的客户</span>
          <div>
            在商品生命周期早期收到诚实的商品反馈。Amazon
            Vine邀请亚马逊上最受信任的评论者发表有关您商品的深刻见解；根据此信息做出明智的决定。
          </div>
        </div>
      </div>
      <div className="registerToVine-register">
        <button>立即开始将商品注册到Vine！</button>
      </div>
      <div className="registerToVine-img2">
        <img src={img2} />
      </div>
      <div className="registerToVine-research-report">
        <div>
          1
          2019年亚马逊针对供应商销售合作伙伴招募中发布的1.8M条Vine评论的研究报告
        </div>
        <div>
          2
          2014年渠道顾问消费者购物习惯调查
        </div>
      </div>
      <FooterCom />
    </div>
  );
}

export default registerToVine;
