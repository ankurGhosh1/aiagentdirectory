import React from "react";
import AgentForm from "@/components/AgentForm";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

function Contact() {
  return (
    <React.Fragment>
      <SEO
        title={`Submit Your AI Agent to Boost Your Visibility`}
        description={`Submit Your AI Agent to Boost Your Visibility`}
        url={`https://aiagentlisting.com/contact`}
        canonicalUrl={`https://www.aiagentlisting.com/contact`}
      />
      <Layout>
        <Container>
          <div className="py-24 flex flex-col justify-center items-center">
            <div className="max-w-[700px]">
              <h1 className="text-4xl font-bold mb-4 text-white">
                Submit Your AI Agent
              </h1>
              <p className="text-gray-400 pb-12">
                Share your AI agent with our community. We&apos;ll review your
                submission and get back to you soon.
              </p>
              <AgentForm />
            </div>
          </div>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

export default Contact;
