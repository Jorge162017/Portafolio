import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_showcase_container">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_showcase">
                <div className="showcase_image">
                  <img src={data.img} alt={data.title} />
                </div>
                <div className="showcase_details">
                  <div className="title_wrapper">
                    <h3 className="showcase_title">{data.title}</h3>
                    {data.status && <span className="dev_indicator">{data.status}</span>}
                  </div>
                  <p className="showcase_description">{data.description}</p>
                  {data.privateNotice && (
                    <p className="private_notice">{data.privateNotice}</p>
                  )}
                  <div className="showcase_stack">
                    <label>Technology Stack</label>
                    <div className="stack_tags">
                      {data.technologies.map((tech, idx) => (
                        <span key={idx} className="stack_tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="showcase_links">
                    {data.github && (
                      <a href={data.github} target="_blank" rel="noopener noreferrer" className="link_btn github_btn">
                        → GitHub
                      </a>
                    )}
                    {data.link && (
                      <a href={data.link} target="_blank" rel="noopener noreferrer" className="link_btn demo_btn">
                        → Live Demo
                      </a>
                    )}
                    {data.related && (
                      <div className="related_repos">
                        {data.related.map((repo, idx) => (
                          repo.private ? (
                            <span key={idx} className="link_btn related_btn private_repo">
                              {repo.name}: Private
                            </span>
                          ) : (
                            <a key={idx} href={repo.url} target="_blank" rel="noopener noreferrer" className="link_btn related_btn">
                              → {repo.name}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
