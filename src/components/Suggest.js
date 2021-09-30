import { useState } from "react";
import {
  Form,
  Modal,
  Button,
  Image,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

const Suggest = ({ show, onHide, handleSuggest }) => {
  const [selectedCategory, setSelectedCategory] = useState("produce");
  const [itemName, setItemName] = useState("");
  const [itemURL, setItemURL] = useState("");

  const produceCerts = [
    ["fair-trade", "Fair Trade Certified"],
    ["food-justice", "Food Justice Certified"],
    ["cert-nat-grown", "Certified Naturally Grown"],
    ["non-gmo", "Non-GMO Verified"],
    ["rainforest-alliance", "Rainforest Alliance"],
    ["fair-food", "Fair Food Programs"],
    ["salmon-safe", "Salmon Safe"],
    ["fair-for-life", "Fair For Life"],
    ["pesticide-free", "SCS Pesticide Residue Free"],
    ["eco-apple", "Eco-Apple by IPM Institute"],
    ["eco-stone", "Eco-Stone Fruit by IPM Institute"],
    ["bird-friendly", "Bird-Friendly Coffee"],
    ["whole-foods", "Whole Foods Responsible Program"],
    ["stemilt-responsible", "Stemilt Responsible Choice"],
    ["farmworker-assured", "Responsibly Grown, Farmworker Assured"],
    ["food-alliance", "Food Alliance Certified"],
  ];

  const beefCerts = [
    ["animal-welfare", "Animal Welfare Approved"],
    ["usda-organic", "USDA Organic"],
    ["food-justice", "Food Justice Certified"],
    ["cert-nat-grown", "Certified Naturally Grown"],
    ["non-gmo", "Non-GMO Verified"],
    ["american-grassfed", "American Grassfed Association"],
    ["cert-humane", "Certified Humane"],
    ["demeter-cert-biodynamic", "Demeter Certified Biodynamic"],
    ["food-alliance", "Food Alliance Certified"],
    ["food-alliance-grassfed", "Food Alliance Certified Grassfed"],
    ["gap1", "GAP1"],
    ["gap2", "GAP2"],
    ["gap4", "GAP4"],
    ["gap5", "GAP5"],
    ["gap5+", "GAP5+"],
    ["american-humane-cert", "American Humane Certified"],
    ["usda-grassfed", "USDA Grassfed"],
  ];

  const chickenCerts = [
    ["food-justice", "Food Justice Certified"],
    ["cert-nat-grown", "Certified Naturally Grown"],
    ["non-gmo", "Non-GMO Verified"],
    ["cert-humane", "Certified Humane"],
    ["food-alliance", "Food Alliance Certified"],
    ["gap1", "GAP1"],
    ["gap2", "GAP2"],
    ["gap3", "GAP3"],
    ["gap4", "GAP4"],
    ["gap5", "GAP5"],
    ["gap5+", "GAP5+"],
    ["american-humane-cert", "American Humane Certified"],
  ];

  const porkCerts = [
    ["food-justice", "Food Justice Certified"],
    ["cert-nat-grown", "Certified Naturally Grown"],
    ["non-gmo", "Non-GMO Verified"],
    ["american-grassfed", "American Grassfed Association"],
    ["cert-humane", "Certified Humane"],
    ["demeter-cert-biodynamic", "Demeter Certified Biodynamic"],
    ["food-alliance", "Food Alliance Certified"],
    ["gap1", "GAP1"],
    ["gap2", "GAP2"],
    ["gap3", "GAP3"],
    ["gap4", "GAP4"],
    ["gap5", "GAP5"],
    ["american-humane-cert", "American Humane Certified"],
  ];

  const eggCerts = [
    ["food-justice", "Food Justice Certified"],
    ["cert-nat-grown", "Certified Naturally Grown"],
    ["non-gmo", "Non-GMO Verified"],
    ["cert-humane", "Certified Humane"],
    ["food-alliance", "Food Alliance Certified"],
    ["gap1", "GAP1"],
    ["gap2", "GAP2"],
    ["gap3", "GAP3"],
    ["gap4", "GAP4"],
    ["gap5", "GAP5"],
    ["american-humane-cert", "American Humane Certified"],
    ["no-antibiotics", "No Antibiotics Claim"],
  ];

  const dairyCerts = [
    ["animal-welfare", "Fair Trade Certified"],
    ["usda-organic", "USDA Organic"],
    ["food-justice", "Food Justice Certified"],
    ["cert-nat-grown", "Certified Naturally Grown"],
    ["non-gmo", "Non-GMO Verified"],
    ["american-grassfed", "American Grassfed Association"],
    ["cert-humane", "Certified Humane"],
    ["demeter-cert-biodynamic", "Demeter Certified Biodynamic"],
    ["food-alliance", "Food Alliance Certified"],
    ["food-alliance-grassfed", "Food Alliance Certified Grassfed"],
    ["gap1", "GAP1"],
    ["gap2", "GAP2"],
    ["gap4", "GAP4"],
    ["gap5", "GAP5"],
    ["gap5+", "GAP5+"],
    ["usda-grassfed", "USDA Grassfed"],
    ["american-humane-cert", "American Humane Certified"],
  ];

  const seafoodCerts = [
    ["responsibly-farmed", "Whole Foods Market Responsibly Farmed"],
    ["best-aquaculture", "Best Aquaculture Practices Certified"],
    ["msc-cert", "MSC Certified Sustainable"],
    ["asc-cert", "Farmed Responsibly ASC Certified"],
    ["friend-sea", "Friend of the Sea"],
    ["non-gmo-seafood", "Non-GMO Project Verified: Seafood"],
    ["dolphin-safe", "Dolphin Safe"],
  ];

  const categoryCerts = {
    produce: produceCerts,
    beef: beefCerts,
    chicken: chickenCerts,
    pork: porkCerts,
    eggs: eggCerts,
    dairy: dairyCerts,
    seafood: seafoodCerts,
    other: seafoodCerts,
  };

  const [certifications, setCertifications] = useState(
    Object.assign(
      {},
      ...categoryCerts["produce"].map((cert) => ({ [cert[0]]: false }))
    )
  );

  const handleSelect = (e) => {
    setSelectedCategory(e.target.value);
    setCertifications(
      Object.assign(
        {},
        ...categoryCerts[e.target.value].map((cert) => ({ [cert[0]]: false }))
      )
    );
    categoryCerts[selectedCategory].forEach(
      (cert) => (document.getElementById(cert[0]).checked = false)
    );
  };

  const onChangeItemName = (e) => {
    const itemName = e.target.value;
    setItemName(itemName);
  };

  const onChangeItemURL = (e) => {
    const itemURL = e.target.value;
    setItemURL(itemURL);
  };

  const onChangeCertification = (e) => {
    if (e.target.id !== "certifications") {
      let newcerts = certifications;
      newcerts[e.target.id] = e.target.checked;
      setCertifications(newcerts);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Suggestion received!");
    let newSuggestion = {
      name: itemName,
      URL: itemURL,
      category: selectedCategory,
      certifications: Object.keys(certifications)
        .map((key) => {
          if (certifications[key]) return key;
          else return false;
        })
        .filter(Boolean),
    };

    handleSuggest(newSuggestion);
    setItemName("");
    setItemURL("");
    setSelectedCategory("produce");
    setCertifications(
      Object.assign(
        {},
        ...categoryCerts["produce"].map((cert) => ({ [cert[0]]: false }))
      )
    );
    categoryCerts[selectedCategory].forEach(
      (cert) => (document.getElementById(cert[0]).checked = false)
    );
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Suggest a new item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Group className="mb-3" id="itemGeneral">
              <FloatingLabel id="itemName" label="Item Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name of item"
                  value={itemName}
                  onChange={onChangeItemName}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter an item name
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                id="itemURL"
                label="URL to item (optional)"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="URL to item"
                  value={itemURL}
                  onChange={onChangeItemURL}
                />
              </FloatingLabel>
              <FloatingLabel
                id="floatingInput"
                label="Category"
                className="mb-3"
              >
                <Form.Control as="select" id="category" onChange={handleSelect}>
                  <option value="produce">Produce</option>
                  <option value="beef">Beef</option>
                  <option value="chicken">Chicken</option>
                  <option value="pork">Pork</option>
                  <option value="eggs">Eggs</option>
                  <option value="dairy">Dairy</option>
                  <option value="seafood">Seafood</option>
                  {/* <option value="other">Other</option> */}
                </Form.Control>
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              className="mb-3"
              id="certifications"
              onChange={onChangeCertification}
            >
              <Form.Label>Certifications</Form.Label>
              <Row className="CertList">
                {categoryCerts[selectedCategory].map((cert) => (
                  <Col className="Cert" key={cert[0]}>
                    <Form.Check
                      className="checkbox"
                      id={cert[0]}
                      defaultChecked={false}
                    >
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label>
                        <Image
                          style={{ width: "50px" }}
                          src={require(`../img/${cert[0]}.jpg`).default}
                        />
                        {cert[1]}
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                ))}
              </Row>
              {/* )} */}
            </Form.Group>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit Suggestion
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Suggest;
