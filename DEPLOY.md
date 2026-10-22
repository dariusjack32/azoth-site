# Deploy to GitHub Pages at azothandco.com

Do these in order. Steps marked **⚠** change something public or at Porkbun.

## 1. Pass the launch check

```sh
npm run check:launch
```

The deploy workflow runs the same check first and won't publish until it passes. See BEFORE_LAUNCH.md.

## 2. Create the repository and push ⚠

GitHub Pages is free for **public** repositories. That's fine for a marketing site — the code isn't secret — but keep anything private (the client portal, client data) out of this repo.

1. On GitHub: **New repository** → name it `azoth-site` → **Public** → don't add a README (this folder has one).
2. In this folder (the first line is only needed if `deploy.yml` sits at the top of the folder — it moves the workflow into the place GitHub reads it from):

   ```sh
   [ -f deploy.yml ] && mkdir -p .github/workflows && mv deploy.yml .github/workflows/deploy.yml
   git init -b main
   git add .
   git commit -m "Azoth & Co. site"
   git remote add origin https://github.com/[GITHUB_USERNAME]/azoth-site.git
   git push -u origin main
   ```

## 3. Turn on Pages

Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`. Watch the **Actions** tab: the run goes green once the launch check passes.

## 4. Verify the domain with GitHub — before touching DNS

Verification stops anyone else from claiming azothandco.com on GitHub Pages.

1. Your GitHub profile → **Settings → Pages → Add a domain** → `azothandco.com`.
2. GitHub shows a TXT record named `_github-pages-challenge-[GITHUB_USERNAME]`. Add it at Porkbun (step 6), then click **Verify**.

## 5. Set the custom domain on the repo

Repo → **Settings → Pages → Custom domain** → `azothandco.com` → **Save**.

With an Actions workflow, GitHub ignores the `public/CNAME` file (it's kept only for portability) — this setting is what counts.

## 6. Point DNS at GitHub (Porkbun) ⚠

Porkbun → **Domain Management** → azothandco.com → **DNS**.

1. Delete Porkbun's default parking records — the ones on the root and on `*` that point at Porkbun's parking page. Don't touch anything email-related.
2. Add these records:

   | Type | Host | Answer |
   |---|---|---|
   | A | *(blank)* | 185.199.108.153 |
   | A | *(blank)* | 185.199.109.153 |
   | A | *(blank)* | 185.199.110.153 |
   | A | *(blank)* | 185.199.111.153 |
   | AAAA | *(blank)* | 2606:50c0:8000::153 |
   | AAAA | *(blank)* | 2606:50c0:8001::153 |
   | AAAA | *(blank)* | 2606:50c0:8002::153 |
   | AAAA | *(blank)* | 2606:50c0:8003::153 |
   | CNAME | www | [GITHUB_USERNAME].github.io |
   | TXT | _github-pages-challenge-[GITHUB_USERNAME] | *(value from step 4)* |

   These are GitHub's published Pages addresses as of October 2026. Confirm them against GitHub's doc "Managing a custom domain for your GitHub Pages site" before saving.

3. **Leave email alone:** MX records and the SPF, DKIM and DMARC TXT records from Google Workspace stay exactly as they are.

## 7. Turn on HTTPS

DNS takes minutes to a few hours. When the repo's Pages settings show the DNS check succeeded and the certificate is issued, tick **Enforce HTTPS**.

## 8. Check it

- `https://azothandco.com` loads, and `https://www.azothandco.com` redirects to it.
- Paste the URL into LinkedIn's Post Inspector (linkedin.com/post-inspector) and confirm the share card shows the gold mark and "Operations, transmuted."

## Updating later

Edit, commit, push to `main`. It's live in about a minute.
