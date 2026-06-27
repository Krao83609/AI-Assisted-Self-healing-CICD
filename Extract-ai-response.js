// Gemini response
const ai = $input.first().json;

// Extract the JSON string
const raw = ai.content.parts[0].text;

// Remove markdown if Gemini added it
const cleaned = raw.replace(/```json|```/g, "").trim();

// Parse JSON
const parsed = JSON.parse(cleaned);

// Webhook payload
const payload = $("Github-workflow-failure").first().json.body;

return {
  json: {
    branch_name: parsed.branch_name,
    file_path: parsed.file_path,
    fixed_code: parsed.fixed_code,
    base64_content: Buffer.from(parsed.fixed_code).toString("base64"),
    pr_title: parsed.pr_title,
    pr_body: parsed.pr_body,

    repo: payload.repo,
    branch: payload.branch,
    commit: payload.commit,
    actor: payload.actor
  }
};