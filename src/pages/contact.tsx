import React from "react";
import AgentForm from "@/components/AgentForm";
import Container from "@/components/Container";
import Layout from "@/components/Layout";

function Contact() {
  return (
    <Layout>
      <Container>
        <div className="py-24 flex flex-col justify-center items-center">
          <div className="max-w-[700px]">
            <h1 className="text-4xl font-bold mb-4">Submit Your AI Agent</h1>
            <p className="text-gray-400 pb-12">
              Share your AI agent with our community. We&apos;ll review your
              submission and get back to you soon.
            </p>
            <AgentForm />
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Contact;
