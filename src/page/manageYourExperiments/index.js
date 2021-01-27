import "./manageYourExperiments.css";
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import FooterCom from "../../components/FooterCom/FooterCom";
import { InfoCircleOutlined } from "@ant-design/icons";
import img1 from "./1611226123.jpg";
function manageYourExperiments() {
  return (
    <div >
      <HeaderCom />
      <div className="manageYourExperiments-box">
        <div className="manageYourExperiments-head">
          <InfoCircleOutlined />
          你还没有资格参加”管理您的实验“。请参见下方，了解更多信息。
        </div>
        <div className="manageYourExperiments-body">
            <div className="manageYourExperiments-body-left">
                <span>”管理您的试验“是什么？</span>
                <div>作为品牌所有者，除了广告和促销等付费工具之外，您可能还在寻找其他方法来增加销量。”管理您的试验“是一款免费工具，可让您对商品信息中的内容运行A/B测试，以帮助提高流量和销量。</div>
                <br />
                <div>您可以对商品信息中的标题或A+商品描述开展试验（即将推出更多试验类型）。在试验运行期间，访问您页面的买家将被分为两组，每组都会在整个试验中看到相同版本的描述；这有助于提高结果质量。在试验结束时您会看到非常实用的数据，可帮您为品牌制定营销策略。</div>
                <br />
                <span>为什么我无法访问”管理您的试验“？</span>
                <div>为了开展能得出具有统计意义结论的试验，你的品牌商品必须满足最低流量要求。目前，您没有任何商品达到该阈值。只要您拥有至少一款符合要求的商品，就会自动获得试验权限，不需要采取进一步操作。届时我们可能会向您发送电子邮件，告知您有权参加此试验。</div>
                <br />
                <div>同时，请务必查看<a >”品牌权益资格“页面</a>，以确保您已被识别为品牌所有者，并根据需要更正您的状态。</div>
            </div>
            <div>
                <img src={img1} />
                <div><span>我该如何同时增加流量和销量？</span></div>
                尝试以下提示：
                <ul>
                    <li>使用<a>品牌分析</a>确定热门搜索词，并将其添加到您的商品信息和关键词中</li>
                    <li>向您的商品信息添加<a>A+商品描述</a></li>
                    <li>试一试<a>品牌推广</a>广告活动</li>
                </ul>
            </div>
        </div>
      </div>

      <FooterCom />
    </div>
  );
}

export default manageYourExperiments;
